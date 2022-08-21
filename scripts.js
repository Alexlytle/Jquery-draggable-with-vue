

  const { createApp } = Vue

  createApp({
    data() {
      return {
        drag:['drag one','drag two'],
        items:['item 1','item 2','item 3','item 4','item 5'],
        dragging:null,
        currentIndex:null
      }
    },
    mounted(){
            $( "#sortable" ).sortable({
              revert: true,
              update:(event, ui )=>{
                // console.log(ui.item.index(),ui.item[0].innerHTML)
                if(this.dragging){
                    this.updateArray(ui)
                    this.dragging = false
                }else{
                    
                    let itemArray = []
                    let myPromise = new Promise((myResolve, myReject)=>{
                                myResolve(); // when successful
                                myReject();  // when error
                        });
                        myPromise.then(()=> { 
                                    this.items.length = 0;
                                    document.querySelectorAll('.item').forEach(element => itemArray.push(element.innerText));
                                },
                        ).then(()=>{
                                    this.items = itemArray
                                },    
                        )
                    }

            } 
            });
            $( ".draggable" ).draggable({
              connectToSortable: "#sortable",
              helper: "clone",
              revert: "invalid",
              start :()=>{
                this.dragging = true
              }
             
            });
            $( "ul, li" ).disableSelection();
 
    },
    methods:{
        updateArray(ui){
            this.items.splice(ui.item.index(),0, ui.item[0].innerHTML)
            ui.item.remove()
        }
    }
  }).mount('#app')