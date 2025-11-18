with open("data.txt",'r',encoding='utf-8') as f:
    content = f.read().split('\n\n')

for day in content:
    for line in day.split('\n'):
        if "http" in line:

            url,name,picUrl = line.split('\t')
            print("{"+f"url:'{url}',name:'{name}',pic:'{picUrl}'"+"},")
    print("\n")
