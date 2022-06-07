const axios = require('axios').default

const BookController = {
  index: async (request, response) => {
    let tmpArr = []
    const { genre, subject } = request.query
    try {
      const http = await axios.get('http://openlibrary.org/subjects/love.json?details=true')
      let dataWorks = http.data.works

      if (!genre && !subject) tmpArr = dataWorks

      if (subject) {
        dataWorks.map(data => {
          if (data.subject.includes(subject)) return tmpArr.push(data)
        })
      }

      tmpArr = tmpArr.map(data => {
        return {
          title: data.title,
          author: data.authors,
          edition_number: data.cover_edition_key
        }
      })

      return response.json(tmpArr)
    } catch (error) {
      return response.status(500).json({message: error.message})
    }
  },
  store: async (request, response) => {
    let tmpData = {edition: null, date: null}
    const { edition, date } = request.body
    try {
      tmpData.edition = edition ?? null
      tmpData.date = date ?? null
      return response.json(tmpData)
    } catch (error) {
      return response.status(500).json({message: error.message})
    }
  }
}

module.exports = BookController