let modalcontainer = document.querySelector(".aside-first")
let usercontainer = document.querySelector('.user-container')

let getaddbutton = document.querySelector("#adduser").addEventListener("click",() =>{
    modalcontainer.style.display = "block"
})

let iconremove = document.querySelector('.icon').addEventListener('click',()=>{
    modalcontainer.style.display = "none"
})

let addbutton = document.querySelector('.addbutton').addEventListener('click',() =>{
let getmtct = document.querySelector('main');
    let createDiv = document.createElement('div');
        createDiv.setAttribute('class','user-container container col-sm-12 col-md-12 col-xs-12 col-lg-12')
            let createspanone = document.createElement('span')
                createspanone.setAttribute('class','user-information span-one')
                    let createspantwo = document.createElement('span')
                        createspantwo.setAttribute('class','user-information span-two')
                            let createspantree = document.createElement('span')
                                createspantree.setAttribute('class','user-information span-tree date')
                                    let createspanfour = document.createElement('span')
                                    createspanfour.setAttribute('class','user-information span-four licences')
                                        let createbuttonsspan = document.createElement('span');
                                        createbuttonsspan.setAttribute('class','buttons-span');
                                            let createElementButtonOne = document.createElement('button')
                                            createElementButtonOne.setAttribute('class','btn btn-success addlicense')
                                                createElementButtonOne.setAttribute('id','cl')    
                                            let createElementButtonTwo = document.createElement('button')
                                                createElementButtonTwo.setAttribute('class','btn btn-danger remove')

                                                modalcontainer.style.display = "none"
                                                
                                        getmtct.append(createDiv)
                                        createDiv.appendChild(createspanone)
                                        createDiv.appendChild(createspantwo)
                                        createDiv.appendChild(createspantree)
                                        createDiv.appendChild(createspanfour)
                                        createElementButtonOne.innerHTML = 'Add Licence'
                                        createElementButtonTwo.innerHTML = 'Remove'
                                        createDiv.appendChild(createElementButtonOne)
                                        createDiv.appendChild(createElementButtonTwo)
                                        createDiv.appendChild(createbuttonsspan);
                                        
                                        createbuttonsspan.appendChild(createElementButtonOne)
                                        createbuttonsspan.appendChild(createElementButtonTwo)

    
    let date = new Date()
    let setdate = document.querySelector('.date').innerHTML = "0" + date.getDay() + " " + ". " + date.getMonth() + ". " + date.getFullYear()

    let getlicense = document.querySelector(".licences")
    getlicense.innerHTML = 0;
    
    let namefirst = document.querySelector('#namefirst').value
    let idfirst = document.querySelector('#idfirst').value

    let usersobj = {
        firstname:namefirst,
        firstid:idfirst
    }

    createspanone.innerHTML = usersobj.firstname
    createspantwo.innerHTML = usersobj.firstid
 
    let licenses = document.querySelector('#cl').addEventListener('click',()=>{
        let createlicensecontainerone = document.createElement('div')
        createlicensecontainerone.setAttribute('class','user-child-container-one container col-sm-10')
            let createlicensespanone = document.createElement('span')
                createlicensespanone.setAttribute('class','license-span-one-one col-sm-2 opacity')
                createlicensespanone.innerHTML = "Licenses"
                    let createlicensespantwo = document.createElement('span')
                        createlicensespantwo.setAttribute('class','license-span-two-two col-sm-8 opacity')
                        createlicensespantwo.innerHTML = "Expires"

                        createlicensecontainerone.appendChild(createlicensespanone)
                        createlicensecontainerone.appendChild(createlicensespantwo)



        let createlicensecontainertwo = document.createElement('div')
            createlicensecontainertwo.setAttribute('class','user-child-container-two container col-sm-10')
                let createlicensespantree = document.createElement('span')
                    createlicensespantree.setAttribute('class','license-span-tree-tree col-sm-2 addspan')
                        let createlicensespanfour = document.createElement('span')
                            createlicensespanfour.setAttribute('class','license-span-four-four col-sm-8')

                            createlicensecontainertwo.appendChild(createlicensespantree)
                            createlicensecontainertwo.appendChild(createlicensespanfour)
                               
                                        let parent = document.createElement("div");
                                        parent.setAttribute('class','childs-container-parent container')

                                        parent.appendChild(createlicensecontainerone)
                                        parent.appendChild(createlicensecontainertwo)

                                        let section = document.querySelector('section')
                                        section.appendChild(parent)
                                    
                                        
    })
                                         let addlicensebutton = document.querySelector('.addlicense').addEventListener('click',() =>{
                                            let asidesecond = document.querySelector('.aside-second')
                                            asidesecond.style.display = 'block'
                                            
                                            let addlicensetwo = document.querySelector('.addlicensetwo').addEventListener('click',() => {
                                                let getlicensename = document.querySelector('#licensename').value
                                                let getlicensedate = document.querySelector('#licensedate').value

                                                let getone = document.querySelector('.license-span-tree-tree').innerHTML = getlicensename
                                                let gettwo = document.querySelector('.license-span-four-four').innerHTML = getlicensedate

                                                let namefirstt = document.getElementById('namefirst').value
                                                let idfirstt = document.getElementById('idfirst').value
                                                
                                                let spanname = document.querySelector('.aa');
                                                spanname.innerHTML = namefirstt
                                                console.log(namefirstt.value)
                                            })
                                        })
})
let get = document.querySelector('.remove-aside-second').addEventListener('click',() =>{
    let asidesecond = document.querySelector('.aside-second')
    asidesecond.style.display = 'none'
})

    let replaceone = document.querySelector('.subscription').addEventListener('click',()=>{


        let subscription = document.querySelector('.subscription')
        let offline = document.querySelector('.offline-activation')
        offline.style.display = "none";

        let spanss = document.querySelectorAll('.addspan')
        let x = document.createElement('div');
            x.setAttribute('class','x')

            // let spanname = document.createElement('span');
            // spanname.setAttribute('class','othersppanone')
            // spanname.innerHTML = "asdjhj"

            // x.appendChild(spanname)
            subscription.appendChild(x)

            
        // for(let i = 0; i < spanss.length; i++){
            
        //     x.innerHTML = spanss[i]
        // }


    })

