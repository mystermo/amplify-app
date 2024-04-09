exports.handler = async (event) => {
    console.log(event)
    const itemId = event.pathParameters.itemId;
    const item = {'itemId': itemId, 'itemName': "Item " + itemId};
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(item),
    };
    return response;
}