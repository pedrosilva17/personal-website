import sqlite3
import requests
from typing import Tuple
from bs4 import BeautifulSoup

def connection_open(db_path) -> Tuple[sqlite3.Connection, sqlite3.Cursor]:
    connection = sqlite3.connect(db_path)
    connection.row_factory = sqlite3.Row
    cursor = connection.cursor()
    return connection, cursor


def connection_close(connection: sqlite3.Connection, cursor: sqlite3.Cursor):
    return cursor.close(), connection.close()

def create_database(sql_path, db_path):
    with open(sql_path, "r", encoding="utf-8") as file:
        sql_commands = file.read()

    connection, cursor = connection_open(db_path)
    try:
        cursor.executescript(sql_commands)
        connection.commit()
    except sqlite3.Error as e:
        print(f"Error creating database: {e}")
    finally:
        connection.close()

def save(pairs):
    connection, cursor = connection_open("database/database.db")
    for number, description in pairs:
        cursor.execute("INSERT INTO Numbers('number', 'description') VALUES(?, ?)", (number, description,))
    connection.commit()
    connection_close(connection, cursor)

def parse(html):
    soup = BeautifulSoup(html, 'html.parser')
    paragraph = soup.find('p')
    numbers = []
    descriptions = []
    for font_tag in paragraph.find_all('font', {'size': "+3"}):
        content = ""
        for tag in font_tag.next_siblings:
            if tag.name == 'br':
                break
            elif tag.name == 'a':
                content += tag.get_text()
            else:
                content += str(tag)
        if "???" in content: continue
        numbers.append(int(font_tag.get_text()))
        descriptions.append(content.strip())

    return numbers, descriptions

def fetch(url):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        html_content = ""
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                html_content += chunk.decode("utf-8")

        with open('external/numbers.html', 'w', encoding='utf-8') as file:
            file.write(html_content)
        return html_content
    except requests.exceptions.RequestException as e:
        print(f"Error fetching HTML: {e}")
        
def test():
    connection, cursor = connection_open("database/database.db")
    cursor.execute("SELECT * FROM Numbers ORDER BY RANDOM() LIMIT 1")
    data = cursor.fetchone()
    print(data["number"], data["description"])
    connection_close(connection, cursor)

if __name__ == "__main__":
    create_database('database/database.sql', 'database/database.db')
    # html = fetch('https://erich-friedman.github.io/numbers.html')
    with open("external/numbers.html", "r", encoding="utf-8") as file:
        html = file.read()
    numbers, descriptions = parse(html)
    save(zip(numbers, descriptions))