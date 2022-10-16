

export const mixedJson = {
    "provider": {
        "name": "Cloud Services International",
        "website": "https://cloudservicesinternational.com",
        "email": "support@cloudservicesinternational.com",
        "logo": "/csi.svg"
    },
    "services": [
        {
            "id": "db1",
            "name": "Cloud database services",
            "date": "2019-07-04T13:33:03.969Z",
            "description":"Our bleeding edge NoSQL databases service.",
            "refresh": 5000,
            "status": 200,
            "location": {
                "lat": 56.6208152,
                "long": -3.9526817
            },
            "services": [
                {
                    "id": "db1-eu",
                    "name": "Cloud database services Europe",
                    "date": "2019-07-04T13:33:03.969Z",
                    "description":"Our bleeding edge NoSQL databases service in our German data centers.",
                    "refresh": 5000,
                    "status": 200,
                    "location": {
                        "lat": 53.6208152,
                        "long": -4.9526817
                    }
                },
                {
                    "id": "db1-us",
                    "name": "Cloud database services US",
                    "date": "2019-07-04T13:33:03.969Z",
                    "description":"Our bleeding edge NoSQL databases service in our Washington data centers.",
                    "refresh": 5000,
                    "status": 200,
                    "location": {
                        "lat": 34.0991896,
                        "long": -99.334892
                    }
                }
            ]
        },
        {
            "id": "web1",
            "name": "Cloud Web services",
            "date": "2019-07-04T13:33:03.969Z",
            "refresh": 5000,
            "status": 300,
            "location": {
                "lat": 56.6208152,
                "long": -3.9526817
            },
        },
        {
            "id": "payment",
            "name": "Cloud Payment services",
            "date": "2019-07-04T13:33:03.969Z",
            "refresh": 5000,
            "status": 400,
            "location": {
                "lat": 56.6208152,
                "long": -3.9526817
            },
        }
    ],
    "incidents": [
        {
            "id": "458599",
            "opened": "2019-07-04T13:33:03.969Z",
            "closed": "2019-07-04T13:43:03.969Z",
            "title": "Backup replication issues",
            "refresh": 10000,
            "services": [
                "db1-us"
            ],
            "updates": [
                {
                    "details": "Issue resolved.",
                    "date": "2019-07-04T13:43:03.969Z"
                },
                {
                    "details": "We noticed issue replicate backups in the US region.",
                    "date": "2019-07-04T13:33:03.969Z"
                }
            ],
            "support": {
                "email": "support@cloudservicesinternational.com",
                "telephone": "+1-202-555-0198",
                "url": "https://cloudservicesinternational.com/incidents/458599"
            }
        }
    ],
    "maintenance": [
        {
            "id": "15486",
            "start": "2019-07-06T13:33:03.969Z",
            "finish": "2019-07-06T13:45:03.969Z",
            "title": "Installation of new hard drives",
            "services": [
                "db1"
            ],
            "refresh": 200000,
            "updates": [
                {
                    "details": "We are upgrading our hard drives to improve performance",
                    "date": "2019-07-06T13:33:03.969Z"
                }
            ],
            "support": {
                "email": "support@cloudservicesinternational.com",
                "telephone": "+1-202-555-0198",
                "url": "https://cloudservicesinternational.com/maintenance/15486"
            }
        }
    ]
}