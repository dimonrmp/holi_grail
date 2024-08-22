var redis = require("redis");

(async () => {
    const client = redis.createClient();

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    await client.set('key', 'value');
    var value = await client.get('key');

    await client.set('my_key', "hello World!");

    var value = await client.get('my_key');
    console.log(value)

    await client.multi().set('header', 0).set('left', 0).set('article', 0).set('right', 0).set('footer', 0).exec();

    const [header, left, article, right, footer] = await client.multi().get('header').get('left').get('article').get('right').get('footer').exec();

    client.quit()
})();


// var redis = require("redis")
// var client = redis.createClient();

// client.set('my_key', "hello World!")
// client.get('my_key', function(err, reply) {
// client.get('my_key', function(err, reply) {
//     console.log(reply);
// })

// client.mset('header', 0,'left', 0,'article', 0,'right', 0,'footer', 0)
// client.mget(['header', 'left', 'article', 'right', 'footer'], function(err, value){
//     console.log(value);
// })

// client.quit()




