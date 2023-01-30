import tkinter as tk

class Dashboard:
    def __init__(self):
        self.root = tk.Tk()
        self.root.geometry("300x200")

        self.label = tk.Label(self.root, text="Dashboard")
        self.label.pack()

        self.button = tk.Button(self.root, text="Exit", command=self.root.destroy)
        self.button.pack()

    def start(self):
        self.root.mainloop()

class DashboardModule:
    def __init__(self, root):
        self.frame = tk.Frame(root)
        self.frame.pack()

    def update(self, data):
        pass

class DataProvider:
    def __init__(self):
        self.data = {}

    def get_data(self, key):
        return self.data[key]

    def set_data(self, key, value):
        self.data[key] = value

class DashboardService:
    def __init__(self, data_provider):
        self.data_provider = data_provider
        self.modules = []

    def add_module(self, module):
        self.modules.append(module)

    def update_modules(self):
        data = self.data_provider.get_data()
        for module in self.modules:
            module.update(data)

class DashboardController:
    def __init__(self, view, service):
        self.view = view
        self.service = service

    def update_data(self, key, value):
        self.service.data_provider.set_data(key, value)
        self.service.update_modules()

if __name__ == "__main__":
    dashboard_view = Dashboard()
    data_provider = DataProvider()
    dashboard_service = DashboardService(data_provider)
    dashboard_module = DashboardModule(dashboard_view.root)
    dashboard_service.add_module(dashboard_module)
    dashboard_controller = DashboardController(dashboard_view, dashboard_service)
    dashboard_view.start()
