import json

with open('XCITE-testing.json', 'r') as data:
    xciteData = json.load(data)

for x in xciteData:
    print(x['object']['id'])

# outputFile = open("DataExtraction.json","w")#write mode
# outputFile.write(json.dumps(xciteData[0]['actor'], indent = 4, sort_keys="True"))
# outputFile.close()

