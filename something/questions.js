const question = [
    {
        type: "list",
        name: "petType",
        message: "Plese choose a pet",
        choices: [
            "Dog",
            "Cat",
            "Rabbit",
        ]
    },
    {
        type: "input",
        name: "petName",
        message: "What's the name of your pet?"
    }
 ]
export default question;