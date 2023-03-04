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

    def lead_key(self, path):
        with open(path, 'rb') as f:
            self.key = f.read()

    def create_password_file(self, path, initial_value=None):
        self.password_file = path

        if initial_value is not None:
            for key, value in initial_value():
                pass


pm = PasswordManager()
pm.create_key("mykey.key")
