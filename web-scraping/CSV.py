# import csv
# import pandas as pd
# import numpy as np
# from tabulate import tabulate


# df = pd.read_csv('CSV_test.csv')
# headers=["Question Type","Question Text", "Points", "Difficulty", "Option 1", "Option 2", "Option 3", "Option 4", "Correct One"]
# print(tabulate(df, headers, tablefmt="fancy_grid"))

import random

quiz_data = [
    {
        "question": "What year is it?",
        "choices": {"a": "2001", "b": "2016", "c": "2021", "d":"2035"},
        "answer": "c"
    },
    {
        "question": "What is the capital of the United States?",
        "choices": {"a": "Washington DC", "b": "San Jose", "c": "Riverside", "d": "San Diego"},
        "answer": "a"
    },
    {
        "question": "Was Neil Armstrong the first Man on the Moon?",
        "choices": {"a": "True", "b": "False"},
        "answer": "a"
    }
]


for q in quiz_data:
        
    # q = random.choice(quiz_data)

    print("Question: " + q.get('question'))
    print()
    print(f"Answer choices are as follows: ")
    print(q.get('choices'))
    print()
    answer = input("Please enter an answer: ")
    print()

    if answer == q.get('answer').lower():
        print("Correct Answer!!")
        print()
    else:
        print("Incorrect Answer!")
        print()