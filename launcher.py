from os import system
launched=0
finished=False
def launch():
    launched=1
    if launched==1:
        system("assets\acceuil.html")
        finished=True
        if finished==True:
            quit()
        else:
            return None