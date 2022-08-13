import js


def say_hello(username):
    greeting = f"Hello, {username}!"
    # This prints to the console
    print(greeting)

    # This will make an element and add the text to the webpage
    paragraph_element = js.document.createElement("p")
    paragraph_element.textContent = greeting
    js.document.body.append(paragraph_element)


say_hello("danielj")
say_hello("stevenv")
