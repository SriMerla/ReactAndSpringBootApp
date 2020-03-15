
class Test{
    b;
};

t = new Test();
t.b=5;


function a(){
    console.log("Hello World");
    console.log(this);
}

a=a.bind(t);
a();

