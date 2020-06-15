function strip(x: string | number){
    if(typeof x === 'number'){
        return x.toFixed(2);
    }
    return x.trim();
};

class MyResponse {
    header = 'res header';
    result = 'res result';
};

class MyError {
    header = 'error header';
    message = 'error result';
};

function handle(res: MyResponse | MyError){
    if(res instanceof MyResponse){
        return {
            info: res.header + res.result
        };
    } else {
        return {
            info: res.header + res.message
        };
    }
};

// -----
type AlertType = 'success' | 'danger' | 'warning';


