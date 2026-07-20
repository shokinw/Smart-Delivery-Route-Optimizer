class PriorityQueue{


    constructor(){

        this.values=[];

    }



    enqueue(element,priority){


        this.values.push({
            element,
            priority
        });


        this.values.sort(
            (a,b)=>a.priority-b.priority
        );

    }



    dequeue(){

        return this.values.shift();

    }



    isEmpty(){

        return this.values.length===0;

    }


}


module.exports = PriorityQueue;