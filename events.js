export const events =()=>{
    navActions();
    }

    const navActions = () =>{
        const burger = document.getElementById('burger');
        const removeNav = document.getElementById('remove-nav');
        const nav = document.getElementById('nav');
        burgerShow(burger, removeNav, nav);
        BurgerRemove(burger, removeNav);
    }

    const burgerShow = (burger, removeNav, nav)=>{
        burger.addEventListener('click',()=>{
            if(burger.style.display = 'block'){
                burger.style.display = 'none';
                removeNav.style.display = 'block';
                nav.classList.toggle('menu-active');
                }else{
                burger.style.display = 'block';
                removeNav.style.display = 'none';
                
            }
        } )}

    
    const BurgerRemove =(burger, removeNav) =>{
        removeNav.addEventListener('click',()=>{
            if(removeNav.style.display = 'block'){
                removeNav.style.display = 'none';
                burger.style.display = 'block';
                nav.classList.toggle('menu-active');
            }else{
                removeNav.style.display = 'block';
                burger.style.display = 'none';
            }
        })}
    
    
    
    