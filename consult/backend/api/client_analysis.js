module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const clientAnalysis = { ...req.body}
        if(req.params.id) clientAnalysis.id = req.params.id

        try {
            existsOrError(clientAnalysis.name, 'Nome não informado')
            existsOrError(clientAnalysis.address, 'Endereço não informado')
            existsOrError(clientAnalysis.cpf, 'CPF não informado')
            existsOrError(clientAnalysis.age, 'Idade não informado')
            existsOrError(clientAnalysis.income, 'Fonte de renda não informada')
            existsOrError(clientAnalysis.debt, 'Lista de dívidas não informado')
            existsOrError(clientAnalysis.property, 'Lista de bens não informado')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if(clientAnalysis.id) {
            app.db('client_analysis')
                .update(clientAnalysis)
                .where({id: clientAnalysis.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('client_analysis')
                .insert(clientAnalysis)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('client_analysis')
            .then(client_analysis => res.json(client_analysis))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('client_analysis')
            .where({ id: req.params.id})
            .first()
            .then(category => res.json(category))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById }
}