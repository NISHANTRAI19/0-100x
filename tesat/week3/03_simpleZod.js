const zod =require('zod');

function validateArray(arr){
    const schema =zod.array(zod.number());
    const response=schema.safeParse(arr);
    console.log(response);
}

validateArray([1,2,]);

function validateObject(obj){
    const schema= zod.object({userName:zod.string(), email:zod.string().email()})
    const response= schema.safeParse(obj);
    console.log(response);
}
validateObject({userName:"nsihant",email:"rai7nishant@gmail.com"})