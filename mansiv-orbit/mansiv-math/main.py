from json import dumps


def sort_rows(rows):
    sorted_rows = dict(**{str(num): [] for num in range(1, 11)})
    for row in rows:
        for key, value in row.items():
            sorted_rows[key].append(value)
            sorted_rows[key] = sorted(sorted_rows[key])

    print(dumps(sorted_rows, indent=4))


rows = [
    {"2": 0, "5": 1, "7": 2, "8": 1},
    {"1": 2, "6": 1, "8": 2, "9": 0, "10": 2},
    {"1": 0, "2": 1, "3": 1, "4": 1, "5": 0},
    {"3": 0, "4": 0, "5": 2, "7": 0, "9": 2},
    {"3": 2, "4": 2, "6": 2, "9": 1, "10": 1},
    {"1": 1, "2": 2, "6": 0, "8": 0, "10": 0},
]

sort_rows(rows)

rows = [
    {"3": 0, "7": 1, "8": 0, "10": 1},
    {"2": 1, "3": 2, "5": 0, "6": 1, "8": 2},
    {"2": 2, "3": 1, "4": 0, "5": 1, "7": 2},
    {"1": 1, "4": 2, "6": 0, "7": 0, "9": 0},
    {"1": 0, "2": 0, "4": 1, "6": 2, "9": 1},
    {"1": 2, "5": 2, "8": 1, "9": 2, "10": 2},
]

sort_rows(rows)
