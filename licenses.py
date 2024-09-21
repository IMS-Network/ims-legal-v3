import json

def make_markdown_table(data):
    header = "| Package | Licenses | Repository | Publisher | URL | Path | License File |"
    separator = "|---------|----------|------------|-----------|-----|------|--------------|"
    rows = [header, separator]
    
    for package, details in data.items():
        licenses = details.get('licenses', 'N/A')
        repository = details.get('repository', 'N/A')
        publisher = details.get('publisher', 'N/A')
        url = details.get('url', 'N/A')
        path = details.get('path', 'N/A')
        license_file = details.get('licenseFile', 'N/A')
        
        # Formatting links and making sure to handle missing data properly
        repo_link = f"[{repository.split('/')[-1]}]({repository})" if repository != 'N/A' else 'N/A'
        url_link = f"[{url.split('//')[-1]}]({url})" if url != 'N/A' else 'N/A'
        license_link = f"[{license_file.split('/')[-1]}]({repository}/blob/main/{license_file})" if license_file != 'N/A' and repository != 'N/A' else 'N/A'

        row = f"| {package} | {licenses} | {repo_link} | {publisher} | {url_link} | {path} | {license_link} |"
        rows.append(row)
    
    return "\n".join(rows)

def read_json_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        return json.load(file)

# Load data from a JSON file
data = read_json_file('licenses.json')
markdown_table = make_markdown_table(data)

# Print the markdown table or write it to a file
with open('output.md', 'w', encoding='utf-8') as md_file:
    md_file.write(markdown_table)