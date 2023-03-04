from cryptography.fernet import Fernet


class PasswordManager:
    def __init__(self):
        self.key = None
        self.password_file = None
        self.password_dict = {}

    def create_key(self, path):
        self.key = Fernet.generate_key()
        with open(path, 'wb')as f:
            f.write(self.key)

    def load_key(self, path):
        with open(path, 'rb') as f:
            self.key = f.read()


pm = PasswordManager()

print("""What do you want to do?
(1) Create a new key
(2) Load an existing key
(3) Create new password file
(4) Load existing password file
(5) Add a new password
(6) Get a password
(q) Quit
""")

done = False

while not done:

    choice = input("Enter your choice: ")
    if choice == "1":
        path = input("Enter path: ")
        pm.create_key(path)
    elif choice == "2":
        path = input("Enter path: ")
        pm.load_key(path)
    elif choice == "q":
        done = True
        print("Bye")
    else:
        print("Invalid choice!")
