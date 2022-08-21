

  const { createApp } = Vue

  createApp({
    data() {
      return {
        drag:['drag one','drag two'],
        items:['item 1','item 2','item 3','item 4','item 5'],
      }
    },
    mounted(){
            $( "#sortable" ).sortable({
              revert: true,
              update:(event, ui )=>this.updateArray(ui) 
            });
            $( ".draggable" ).draggable({
              connectToSortable: "#sortable",
              helper: "clone",
              revert: "invalid",
             
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