import json


def read(location):
    events = []
    with open(location, 'r+') as file:
        for f in file:
            events.append(json.loads(f))
    return events

def get_url_counts(events=[]):
    urls_with_count = {}
    for event in events:
        url = event.get('url')
        if urls_with_count.get(url) is None:
            urls_with_count[url] = 0
        else:
            urls_with_count[url] += 1
    return urls_with_count

def get_top_urls(urls_with_count):
    return [key for key in sorted(urls_with_count.items(), key=lambda item: item[1], reverse=True)]

def runner(location='../logs.txt'):
    events = read(location)
    url_with_counts = get_url_counts(events)
    return get_top_urls(url_with_counts)

print(runner())
