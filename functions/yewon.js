exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'yewon',
            age: 26,
            email: 'yewon@abc.com'
        })
    }
}