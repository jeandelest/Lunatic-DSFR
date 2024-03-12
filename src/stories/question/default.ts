import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "1",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "TESTTEXTE",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "QNUM",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
    ],
    "components": [
        {
            "componentType": "Question",
            "id": "idQuestion",
            "page": "1",
            "label": {
                "type": "VTL|MD",
                "value": '"Question"',
            },
            "description": {
                "type": "VTL|MD",
                "value": '"Description de la question"',
            },
            "declarations": [
                {
                    "declarationType": "HELP",
                    "id": "idQuestion-help1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Contenu de la  première déclaration avant (contexte)"',
                    },
                    "position": "BEFORE_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "idQuestion-help2",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Contenu de la  deuxième déclaration avant (contexte)"',
                    },
                    "position": "BEFORE_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "idQuestion-help3",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Contenu de la première déclaration après (Information)"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "idQuestion-help4",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Contenu de la deuxième déclaration après (Information)"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
            ],
            "components": [
                {
                    "componentType": "Input",
                    "bindingDependencies": ["TESTTEXTE"],
                    "controls": [
                        {
                            "bindingDependencies": ["TESTTEXTE"],
                            "criticality": "WARN",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '"a ne peut pas valoir BLABLA"',
                            },
                            "typeOfControl": "CONSISTENCY",
                            "control": {
                                "type": "VTL",
                                "value": 'not(nvl(TESTTEXTE,"") = "BLABLA")',
                            },
                            "id": "kfxn6f16-CI-0",
                        },
                        {
                            "bindingDependencies": ["TESTTEXTE"],
                            "criticality": "WARN",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value":
                                    '"Cette phrase un peu longue s\u2019affiche si on a du vide pour la variable sur le texte inférieur à 255 caractères et voilà"',
                            },
                            "typeOfControl": "CONSISTENCY",
                            "control": {
                                "type": "VTL",
                                "value": "not(isnull(TESTTEXTE))",
                            },
                            "id": "kfxn6f16-CI-1",
                        },
                    ],
                    "response": { "name": "TESTTEXTE" },
                    "hierarchy": {
                        "sequence": {
                            "id": "kfxmfvwj",
                            "page": "1",
                            "label": {
                                "type": "VTL|MD",
                                "value": '"I - " || "TEST SUR BOOLEEN CODE DATE ET TEXTE"',
                            },
                        },
                    },
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "kfxn6f16",
                    "page": "1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"➡ 2. " || "Controle sur du texte < 255"',
                    },
                    "mandatory": false,
                    "maxLength": 15,
                },
            ],
        },
        {
            "componentType": "Question",
            "id": "idQuestion2",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question 2"',
            },
            "description": {
                "type": "VTL|MD",
                "value": '"Description de la question 2"',
            },
            "components": [
                {
                    "id": "k0dzbfek",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "page": "2",
                    "min": 0,
                    "max": 100,
                    "decimals": 0,
                    "label": {
                        "value":
                            '"➡ 1. " || "Test de supériorité stricte - Saisie d’un nombre compris entre 0 et 100 - Si valeur supérieure à 5 message d’info. si superieur à 6,5 autre message "',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "k0dzbfek-CI-0",
                            "criticality": "WARN",
                            "control": {
                                "value": "not(cast(nvl(QNUM,0),integer) > 5)",
                                "type": "VTL",
                            },
                            "typeOfControl": "FORMAT",
                            "errorMessage": { "value": '"sup à 5"', "type": "VTL|MD" },
                            "bindingDependencies": ["QNUM"],
                        },

                        {
                            "id": "k0dzbfek-CI-1",
                            "criticality": "WARN",
                            "control": {
                                "value": "not(cast(nvl(QNUM,0),integer) > 6.5)",
                                "type": "VTL",
                            },
                            "typeOfControl": "FORMAT",
                            "errorMessage": {
                                "value": '"superieur à 6.5"',
                                "type": "VTL|MD",
                            },
                            "bindingDependencies": ["QNUM"],
                        },
                    ],
                    "bindingDependencies": ["QNUM"],
                    "response": { "name": "QNUM" },
                },
            ],
        },
    ],
    "pagination": "question",
    "resizing": {},
    "label": {
        "type": "VTL|MD",
        "value": "Test-Dylan",
    },
    "lunaticModelVersion": "2.5.0",
    "modele": "TESTDYLAN",
    "enoCoreVersion": "2.7.1",
    "generatingDate": "06-03-2024 12:46:44",
    "missing": false,
    "id": "lsvuvtbg",
};
