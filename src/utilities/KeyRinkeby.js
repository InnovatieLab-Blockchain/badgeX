const keys = {
    "DUO" : "69c9446852693c00bd0a8825fad8297e4f9db34c9562a660585a0e767f993bd7",
    "RUG" : "11cba7f19bce365f70b85e029f048f5c4cc73ad3232db828af5107dbb865e2b6",
    "Hanze" : "5348f95c79c45633b4418ba04e64f69cafa8734de474651d5436249742901f77",
    "Gemeente Groningen" : "b564ce9e5f2776885626f1a0eb3b880af19ac9d04b96e6cc58c7f51906be7052",
    "Rabobank" : "13b1ed7eb7d0af503dd5f9e292356d58ece0e50221c3ba65ec8ce4c5a3b99c51",
    "Gasunie" : "d99b508accb2bcd22a01fcca5010acffa3ea1579732e74dce45c48d523b65b8b",
    "IND" : "bfbe8c269238fe9f7fe908f3ddf542e46e578652ed58c2625da886a291cd523c",
    "InnovatieLab Blockchain" : "579a4e1e7295aaf07e062318421edb380a09425f619e3c610cad95951ffff29c",
    "InnovatieLab" : "f702d2683fcea2c5011aa6582d2c35f6dd0ad8c339f05cedaad8c47cd22108e8"
}

export function key(name) {
    return keys[name]
}