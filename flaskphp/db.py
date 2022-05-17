import pyodbc

def conexao(command):
    server = 'LEGION'
    database = 'cities'

    con = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server}; \
                        Server=' + server + '; \
                        DATABASE=' + database + ';\
                        Trusted_Connection=yes;')     

    cursor = con.cursor()
    output = cursor.execute(command)
    return output

def insertSQL(database, command):
    server = 'LEGION'

    con = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server}; \
                        Server=' + server + '; \
                        DATABASE=' + database + ';\
                        Trusted_Connection=yes;')     

    cursor = con.cursor()
    output = cursor.execute(command)
    con.commit()
    return output
