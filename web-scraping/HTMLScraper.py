import requests
from bs4 import BeautifulSoup


with open('./Official3DEquilibrium.html', 'r') as f:

    contents = f.read()

    soup = BeautifulSoup(contents, 'html.parser')

    for tag in soup.find_all('li'):
        print(f'{tag.name}: {tag.text}')
