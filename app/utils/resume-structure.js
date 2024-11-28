export const fetchDefaultData = (template_id) => {
    switch (template_id) {
        // t'Elegance
        case '66672b6efe02b86cb6927af8': return {
            "fullname": "Your Fullname",
            "role": "Your current role / designation",
            "socials": {
                "title": "contact",
                "icons": true,
                "phone_code": "+91",
                "phone_number": "XXXXXXXXXX",
                "email": "xyz_qwe@email.com",
                "portfolio_label": "www.abc.com",
                "portfolio_value": "https://www.abc.com",
                "linkedin_label": "asfkasa",
                "linkedin_value": "https://www.asfkasa.linkedin.com",
                "github_label": "asqs1",
                "github_value": "https://www.asqs1.github.com",
            },
            "skills": {
                "title": "Technical Skills",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "label": "Skill Label 1",
                        "content_values": ["Skill 1", "Skill 2"]
                    },
                    {
                        "label": "Skill Label 2",
                        "content_values": ["Skill 1", "Skill 2"]
                    }
                ],
            },
            "experience": {
                "title": "Work Experience",
                "content": [
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "projects": {
                "title": "Projects",
                "content": [
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "education": {
                "title": "Education",
                "content": [
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    },
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    }
                ],
            },
            "achievements": {
                "title": "Achievements",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "title": "achievement_1",
                        "period": "XXXX"
                    },
                    {
                        "title": "achievement_2",
                        "period": "XXXX"
                    }
                ],
            },
            "references": {
                "title": "References",
                "content_type": "plain_list",
                "content_data": ["references_1", "references_2"],
            }
        }

        // t'Simplicity
        case '66672b96fe02b86cb6927afa': return {
            "fullname": "Your Fullname",
            "role": "Your current role / designation",
            "socials": {
                "title": "contact",
                "icons": false,
                "phone_code": "+91",
                "phone_number": "XXXXXXXXXX",
                "email": "xyz_qwe@email.com",
                "portfolio_label": "www.abc.com",
                "portfolio_value": "https://www.abc.com",
                "linkedin_label": "asfkasa",
                "linkedin_value": "https://www.asfkasa.linkedin.com",
                "github_label": "asqs1",
                "github_value": "https://www.asqs1.github.com",
            },
            "skills": {
                "title": "Technical Skills",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "label": "Skill Label 1",
                        "content_values": ["Skill 1", "Skill 2"]
                    },
                    {
                        "label": "Skill Label 2",
                        "content_values": ["Skill 1", "Skill 2"]
                    }
                ],
            },
            "experience": {
                "title": "Work Experience",
                "content": [
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "projects": {
                "title": "Projects",
                "content": [
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "education": {
                "title": "Education",
                "content": [
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    },
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    }
                ],
            },
            "achievements": {
                "title": "achievements",
                "content_type": "plain_list",
                "content_data": ["achievement_1", "achievement_2"],
            },
            "references": {
                "title": "references",
                "content_type": "plain_list",
                "content_data": ["references_1", "references_2"],
            }
        }

        // t'Shadow
        case '66672b9cfe02b86cb6927afc': return {
            "fullname": "Your Fullname",
            "role": "Your current role / designation",
            "socials": {
                "title": "contact",
                "icons": true,
                "phone_code": "+91",
                "phone_number": "XXXXXXXXXX",
                "email": "xyz_qwe@email.com",
                "portfolio_label": "www.abc.com",
                "portfolio_value": "https://www.abc.com",
                "linkedin_label": "asfkasa",
                "linkedin_value": "https://www.asfkasa.linkedin.com",
                "github_label": "asqs1",
                "github_value": "https://www.asqs1.github.com",
            },
            "skills": {
                "title": "Technical Skills",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "label": "Skill Label 1",
                        "content_values": ["Skill 1", "Skill 2"]
                    },
                    {
                        "label": "Skill Label 2",
                        "content_values": ["Skill 1", "Skill 2"]
                    }
                ],
            },
            "experience": {
                "title": "Work Experience",
                "content": [
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "projects": {
                "title": "Projects",
                "content": [
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "education": {
                "title": "Education",
                "content": [
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    },
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    }
                ],
            },
            "achievements": {
                "title": "Achievements",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "title": "achievement_1",
                        "period": "XXXX"
                    },
                    {
                        "title": "achievement_2",
                        "period": "XXXX"
                    }
                ],
            },
            "references": {
                "title": "References",
                "content_type": "plain_list",
                "content_data": ["references_1", "references_2"],
            }
        }

        // t'Serenity
        case '66672ba1fe02b86cb6927afe': return {
            "fullname": "Your Fullname",
            "role": "Your current role / designation",
            "socials": {
                "title": "contact",
                "icons": true,
                "phone_code": "+91",
                "phone_number": "XXXXXXXXXX",
                "email": "xyz_qwe@email.com",
                "portfolio_label": "www.abc.com",
                "portfolio_value": "https://www.abc.com",
                "linkedin_label": "asfkasa",
                "linkedin_value": "https://www.asfkasa.linkedin.com",
                "github_label": "asqs1",
                "github_value": "https://www.asqs1.github.com",
            },
            "skills": {
                "title": "Technical Skills",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "label": "Skill Label 1",
                        "content_values": ["Skill 1", "Skill 2"]
                    },
                    {
                        "label": "Skill Label 2",
                        "content_values": ["Skill 1", "Skill 2"]
                    }
                ],
            },
            "experience": {
                "title": "Work Experience",
                "content": [
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "projects": {
                "title": "Projects",
                "content": [
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "education": {
                "title": "Education",
                "content": [
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    },
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    }
                ],
            },
            "achievements": {
                "title": "Achievements",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "title": "achievement_1",
                        "period": "XXXX"
                    },
                    {
                        "title": "achievement_2",
                        "period": "XXXX"
                    }
                ],
            },
            "references": {
                "title": "References",
                "content_type": "plain_list",
                "content_data": ["references_1", "references_2"],
            }
        }

        // t'Aura
        case '66672ba5fe02b86cb6927b00': return {
            "fullname": "Your Fullname",
            "role": "Your current role / designation",
            "socials": {
                "title": "contact",
                "icons": true,
                "phone_code": "+91",
                "phone_number": "XXXXXXXXXX",
                "email": "xyz_qwe@email.com",
                "portfolio_label": "www.abc.com",
                "portfolio_value": "https://www.abc.com",
                "linkedin_label": "asfkasa",
                "linkedin_value": "https://www.asfkasa.linkedin.com",
                "github_label": "asqs1",
                "github_value": "https://www.asqs1.github.com",
            },
            "skills": {
                "title": "Technical Skills",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "label": "Skill Label 1",
                        "content_values": ["Skill 1", "Skill 2"]
                    },
                    {
                        "label": "Skill Label 2",
                        "content_values": ["Skill 1", "Skill 2"]
                    }
                ],
            },
            "experience": {
                "title": "Work Experience",
                "content": [
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "role": "Your Job Title",
                        "company": "Your Company / Agency",
                        "location": "Job Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "projects": {
                "title": "Projects",
                "content": [
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    },
                    {
                        "name": "Project Name",
                        "project_link": "Project Link",
                        "github_link": "Github Link",
                        "description_type": "unordered_list",
                        "description_list": ["Highlight your responsibilites, your contributions and your achievements in the position."]
                    }
                ],
            },
            "education": {
                "title": "Education",
                "content": [
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    },
                    {
                        "course": "Your course / degree",
                        "institute": "Your institute / school",
                        "location": "Institute / School Location",
                        "period_from": "XXXX",
                        "period_to": "XXXX"
                    }
                ],
            },
            "achievements": {
                "title": "Achievements",
                "content_type": "plain_list",
                "content_data": [
                    {
                        "title": "achievement_1",
                        "period": "XXXX"
                    },
                    {
                        "title": "achievement_2",
                        "period": "XXXX"
                    }
                ],
            },
            "references": {
                "title": "References",
                "content_type": "plain_list",
                "content_data": ["references_1", "references_2"],
            }
        }
    }
}

export const fetchDefaultOrder = (template_id) => {
    switch (template_id) {
        case '66672b6efe02b86cb6927af8': return {
            type: 'dual',
            fields_order: [{
                id: "d1_it0",
                label: 'skills'
            }, {
                id: "d1_it1",
                label: 'experience'
            }, {
                id: "d1_it2",
                label: 'education'
            }, {
                id: "d2_it3",
                label: 'projects'
            }, {
                id: "d2_it4",
                label: 'achievements'
            }]
        }
        case '66672b96fe02b86cb6927afa': return {
            type: 'single',
            fields_order: [
                {
                    id: "d1_it0",
                    label: 'skills'
                }, {
                    id: "d1_it1",
                    label: 'experience'
                }, {
                    id: "d1_it2",
                    label: 'education'
                },
                {
                    id: "d1_it3",
                    label: 'projects'
                }, {
                    id: "d1_it4",
                    label: 'achievements'
                }
            ]
        }
        case '66672b9cfe02b86cb6927afc': return {
            type: 'dual',
            fields_order: [{
                id: "d1_it0",
                label: 'skills'
            }, {
                id: "d1_it1",
                label: 'experience'
            }, {
                id: "d1_it2",
                label: 'education'
            }, {
                id: "d2_it3",
                label: 'projects'
            }, {
                id: "d2_it4",
                label: 'achievements'
            }, {
                id: "d2_it6",
                label: 'references'
            }]
        }
        case '66672ba1fe02b86cb6927afe': return {
            type: 'dual',
            fields_order: [{
                id: "d1_it0",
                label: 'skills'
            }, {
                id: "d1_it1",
                label: 'education'
            }, {
                id: "d2_it0",
                label: 'experience'
            }, {
                id: "d2_it2",
                label: 'projects'
            }, {
                id: "d2_it3",
                label: 'achievements'
            }]
        }
        case '66672ba5fe02b86cb6927b00': return {
            type: 'dual',
            fields_order: [{
                id: "d1_it0",
                label: 'education'
            }, {
                id: "d1_it1",
                label: 'skills'
            }, {
                id: "d1_it2",
                label: 'achievements'
            }, {
                id: "d2_it0",
                label: 'experience'
            }, {
                id: "d2_it1",
                label: 'projects'
            }]
        }
    }
}

export const resumeStructure = {
    fullname: 'Your Fullname',
    role: 'Your current role / designation',
    socials: {
        title: '',
        email: {
            label: 'sample_xyz',
            value: 'sample_xyz@email.com',
        },
        phone: {
            label: '',
            code: '+91',
            number: 'XXXXXXXXXX'
        },
        portfolio: {
            isVisible: false,
            label: 'www.abc.com',
            link: 'https://www.abc.com'
        },
        github: {
            isVisible: false,
            label: 'asqs1',
            link: 'https://www.asqs1.github.com'
        },
        linkedin: {
            isVisible: false,
            label: 'asfkasa',
            link: 'https://www.asfkasa.linkedin.com'
        }
    },
    experience: {
        title: 'Work Experience',
        content: [
            {
                role: 'Your Job Title',
                company: 'Your Company',
                location: 'Job Location',
                period_from: '',
                period_to: '',
                data_type: 'unordered_list',
                data_content: ["Highlight your responsibilites, your contributions and your achievements in the position."]
            },
            {
                role: 'Your Job Title',
                company: 'Your Company',
                location: 'Job Location',
                period_from: '',
                period_to: '',
                data_type: 'unordered_list',
                data_content: ["Highlight your responsibilites, your contributions and your achievements in the position."]
            }
        ]
    },
    skills: {
        title: 'Technical Skills | Skills',
        type: 'plain_list | unordered_list | ordered_list | object_list',
        content: []
    },
    education: {
        title: 'Education',
        content: [
            {
                course: '',
                period: {
                    from: '',
                    to: ''
                },
                institute: ''
            }
        ]
    },
    certificates: {
        title: 'Certificates',
        content: [
            {
                title: 'Trainings and Certifications | Certifications | Trainings ',
                period: {
                    from: '',
                    to: ''
                },
                text: ''
            }
        ]
    },
    achievements: {
        title: 'Achievements | Awards | Awards & Acknoledgements',
        type: 'plain_list | unordered_list | ordered_list',
        content: []
    },
    references: {
        title: 'References',
        type: 'plain_list | unordered_list | ordered_list',
        content: []
    }
}
