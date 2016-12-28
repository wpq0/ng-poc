import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FauxFormsService implements InMemoryDbService {
    createDb() {
        const forms = [
            {
                id: 1,
                names: {
                    "SV": "Name 1 SV",
                    "EN": "Name 1 EN"
                },
                labels: {
                    "SV": "Label 1 SV",
                    "EN": "Label 1 EN"
                },
                descriptions: {
                    "SV": "Description 1 SV",
                    "EN": "Description 1 EN"
                }
            },
            {
                id: 2,
                names: {
                    "SV": "Name 2 SV",
                    "EN": "Name 2 EN"
                },
                labels: {
                    "SV": "Label 2 SV",
                    "EN": "Label 2 EN"
                },
                descriptions: {
                    "SV": "Description 2 SV",
                    "EN": "Description 2 EN"
                }
            },
            {
                id: 3,
                names: {
                    "SV": "Name 3 SV",
                    "EN": "Name 3 EN"
                },
                labels: {
                    "SV": "Label 3 SV",
                    "EN": "Label 3 EN"
                },
                descriptions: {
                    "SV": "Description 3 SV",
                    "EN": "Description 3 EN"
                }
            },
            {
                id: 4,
                names: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                labels: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                descriptions: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                }
            },
            {
                id: 5,
                names: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                labels: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                descriptions: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                }
            },
            {
                id: 6,
                names: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                labels: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                descriptions: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                }
            },
            {
                id: 7,
                names: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                labels: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                descriptions: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                }
            },
            {
                id: 8,
                names: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                labels: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                descriptions: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                }
            },
            {
                id: 9,
                names: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                labels: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                },
                descriptions: {
                    "SV": "Name SV",
                    "EN": "Name EN"
                }
            }
        ];

        const tree = [
            {
                id: 1,
                type: "category",
                name: "Category 1",
                children: [
                    {
                        id: 2,
                        type: "category",
                        name: "Category 2",
                        children: [
                            {
                                id: 3,
                                type: "product",
                                name: "Product 3",
                            },
                            {
                                id: 4,
                                type: "product",
                                name: "Product 4",
                            },
                        ]
                    },
                    {
                        id: 5,
                        type: "category",
                        name: "Category 5",
                        children: [
                            {
                                id: 6,
                                type: "product",
                                name: "Product 6",
                            }
                        ]
                    },
                ]
            },
            {
                id: 7,
                type: "category",
                name: "Category 7",
                children: [
                    {
                        id: 8,
                        type: "product",
                        name: "Product 8",
                    },
                    {
                        id: 9,
                        type: "product",
                        name: "Product 9",
                    },
                ]
            },
        ];

        return { forms, tree };
    }
}