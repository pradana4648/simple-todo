import{d as g,r as m,o as b,c as v,a as e,w as n,v as r,u as k}from"./index.abd6f775.js";import{u as h}from"./todo.store.c1f86e02.js";let u=(d=21)=>crypto.getRandomValues(new Uint8Array(d)).reduce((o,a)=>(a&=63,a<36?o+=a.toString(36):a<62?o+=(a-26).toString(36).toUpperCase():a>62?o+="-":o+="_",o),"");const _={class:"flex flex-col justify-center items-stretch space-y-3 h-screen"},x=e("div",{class:"text-center text-xl font-semibold underline underline-offset-2"}," Daftar Tugas ",-1),y=e("div",{class:"text-center text-sm"},"Buat daftar tugas terpenting harianmu",-1),w=e("label",{for:"title",class:"block font-bold"},"Nama tugasmu",-1),T=e("label",{for:"description",class:"block font-bold"},"Deskripsi tugasmu",-1),A={class:"flex flex-row justify-between items-center"},V=e("label",{for:"createdAt",class:"block font-bold"},"Tanggal mulai",-1),C=e("label",{for:"endAt",class:"block font-bold"},"Tanggal akhir",-1),U=g({__name:"AddTodo",setup(d){const o=k(),a=h(),t=m({id:u(),createdAt:new Date,isCompleted:!1});function i(){t.value={createdAt:new Date,id:u(),isCompleted:!1}}function c(f){t.value.title?(a.addTodo(t.value),console.log("Todo value "+t.value),i(),alert("Sukses tambah data")):alert("Input tidak boleh kosong")}function p(){o.push("/daftar-tugasku")}return(f,l)=>(b(),v("div",_,[x,y,e("div",null,[w,n(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>t.value.title=s),placeholder:"Masukkan judulnya",id:"title",name:"title",class:"bg-gray-50 p-2 border border-gray-200 rounded w-full",required:""},null,512),[[r,t.value.title]])]),e("div",null,[T,n(e("textarea",{"onUpdate:modelValue":l[1]||(l[1]=s=>t.value.description=s),placeholder:"Masukkan deskripsinya",id:"description",name:"description",class:"bg-gray-50 p-2 border border-gray-200 rounded w-full"},null,512),[[r,t.value.description]])]),e("div",A,[e("div",null,[V,n(e("input",{"onUpdate:modelValue":l[2]||(l[2]=s=>t.value.createdAt=s),type:"datetime-local",placeholder:"Masukkan tanggal akhir",class:"bg-gray-50 p-2 border border-gray-200 rounded w-full"},null,512),[[r,t.value.createdAt]])]),e("div",null,[C,n(e("input",{"onUpdate:modelValue":l[3]||(l[3]=s=>t.value.endAt=s),type:"datetime-local",placeholder:"Masukkan tanggal akhir",class:"bg-gray-50 p-2 border border-gray-200 rounded w-full"},null,512),[[r,t.value.endAt]])])]),e("button",{onClick:c,class:"bg-blue-500 p-2 active:translate-y-1 text-white"}," Tambah "),e("button",{onClick:p,class:"p-2 bg-green-500 text-white active:translate-y-1"}," Menuju daftar tugasmu ")]))}});export{U as default};
