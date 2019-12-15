
const constructorMethod = app => {

    app.use("/home", (req, res) => {
        try {
            res.render("details/home")
        } catch (e) {
            res.status(404).json({ error: e })
        }
    })

    app.use("/signup", (req, res) => {
        try {
            res.render("details/signup")
        } catch (e) {
            res.status(404).json({ error: e })
        }
    })

    app.use("/signin", (req, res) => {
        try {
            res.render("details/signin")
        } catch (e) {
            res.status(404).json({ error: e })
        }
    })

    app.use("/schedule", (req, res) => {
        try {
            res.render("details/schedule")
        } catch (e) {
            res.status(404).json({ error: e })
        }
    })

    app.use("/finance", (req, res) => {
        try {
            res.render("details/finance")
        } catch (e) {
            res.status(404).json({ error: e })
        }
    })

    app.use("*", (req, res) => {
        res.status(404).render("details/error", { error: { status: 404, message: "Not found" } });
    })
}

module.exports = constructorMethod