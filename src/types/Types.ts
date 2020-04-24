
export interface Ticket {
    id: string,
    name: string,
    visible: boolean,
    status: string,
    description: string
}

export interface SwimLane {
    status: string,
    tickets: Ticket[]
}

export interface Board {
    name: string,
    swimLanes: SwimLane[]
}


export const dummyData: Board[] = [
  {
    name: "Bored",
    swimLanes: [
      {
        status: "To Do",
        tickets: [
          {
            id: "1",
            name: "TODO 1",
            visible: true,
            status: "To Do",
            description: "bla",
          },
          {
            id: "2",
            name: "TODO 2",
            visible: true,
            status: "To Do",
            description: "bla",
          },
        ],
      },
      {
        status: "In Progress",
        tickets: [
          {
            id: "11",
            name: "Prog 1",
            visible: true,
            status: "In Progress",
            description: "Some big description",
          }
        ]
      }
    ],
  },
]