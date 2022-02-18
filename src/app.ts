console.log("Runkgrit Titachtnimit");
import { PubSub } from '@google-cloud/pubsub';



// Creates a client; cache this for further use
const ProjectId = 'eggsys-dev';
const pubSubClient = new PubSub();
console.log(Math.ceil(11.1));


async function publishMessage() {
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const topicNameOrId = 'teacher';
  const data = JSON.stringify({foo: 'NEW-USER'});  
  const dataBuffer = Buffer.from(data);


  for (let index = 0; index < 5; index++) {
    
    
  
  try {
    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }

  
}


}

publishMessage();