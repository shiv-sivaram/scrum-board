import { ApiClient, ApiClientResult } from './ApiClient'
import * as Types from '../types'
import * as Queries from './queries'
import ApolloClient, {
    ApolloQueryResult,
    ErrorPolicy,
    Observable,
} from 'apollo-boost';


async function wrap<T>(
    promise: Promise<ApolloQueryResult<T>>,
    selectData: (a: any) => T
): Promise<ApiClientResult<T>> {
    try {
        const result = await promise;
        if ((result.errors || []).length > 0)
            return { error: Error((result.errors || []).join(',')) };
        else if (result.data) {
            return { result: selectData(result.data) };
        }
        else {
            return {
                error: Error("didn't know how to handle: " + JSON.stringify(result)),
            };
        }
    }
    catch (e) {
        return { error: e };
    }
}

export class GraphQLApiClient implements ApiClient {
    readonly apolloClient: ApolloClient<any>;

    workflowSubscription: ZenObservable.Subscription | undefined;
    cellSubscription: ZenObservable.Subscription | undefined;

    constructor(apolloClient: ApolloClient<any>) {
        this.apolloClient = apolloClient;
    }

    getBoards(id: string): Promise<ApiClientResult<Types.Board[]>> {
        console.log('GraphQLApiClient::getBoards');
        const queryOptions = {
            query: Queries.queryOrgBoardsGql,
            errorPolicy: 'all' as ErrorPolicy,
            variables: {
                organisationId: id,
            }
        }

        return wrap(
            this.apolloClient.query(queryOptions),
            data => data.organisation.boards
        )
    }

    async createBoard(organisationId: string, name: string): Promise<ApiClientResult<Types.Board>> {
        console.log('GraphQLApiClient::createBoard');
        const mutationOptions = {
            mutation: Queries.mutationPutBoardGql,
            errorPolicy: 'all' as ErrorPolicy,
            variables: {
                organisationId,
                input: {
                    name
                }
            }
        }

        const response = await this.apolloClient.mutate(mutationOptions)
        return {
            result: response.data.putBoard
        }
    }
}
