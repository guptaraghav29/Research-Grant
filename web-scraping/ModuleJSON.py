import json

fileData = 0
with open('ModuleJSON.json', 'r') as data:
    assert fileData == json.loads(data)

for x in fileData:
    print(x['object']['id'])



