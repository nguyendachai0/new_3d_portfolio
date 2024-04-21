// turn pages when click next or prev button

if (document.body.clientWidth > 480) {
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el, index) => {
    el.onclick =  () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
               pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else{
            pageTurn.classList.add('turn')
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})
}
    const contactMeBtn = document.querySelector('.btn.contact-me');
    let pages = document.querySelectorAll('.book-page.page-right'); 


    contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
            }, (index  + 1) * 200 + 100)
        })
    }
    let totalPages = pages.length;
    let pageNumber = 0;

    function reverseIndex(){
        pageNumber--;
        if(pageNumber < 0) {
            pageNumber = totalPages - 1;
        }
    }

    const backProfileBtn = document.querySelector('.back-profile');


    backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].classList.remove('turn')

            setTimeout(() => {
               reverseIndex();
               pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
            }, (index  + 1) * 200 + 100)
        })
    }



    // Opening animation
    const coverRight = document.querySelector('.cover.cover-right');
    const pageLeft = document.querySelector('.book-page.page-left');
    setTimeout(() => {
        coverRight.classList.add('turn');
    }, 2100);
    setTimeout(() => {
        coverRight.style.zIndex = -1;

    }, 2800);
    // Opening animation  (page left or profile page animation)
    setTimeout(() => {
        pageLeft.style.zIndex = 20;

    }, 3200);

    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn')

        setTimeout(() => {
           reverseIndex();
           pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
        }, (index  + 1) * 200 + 2100)
    })



    // Check if viewport width is less than 480px
if (document.body.clientWidth < 480) {
    const proFileNextBtn = document.querySelectorAll('.profile-page .nextprev-btn');
    proFileNextBtn.forEach((el, index) => {
        el.onclick =  () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);
    
           
              
            if(pageTurn.classList.contains('turn')){
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                   pageTurn.style.zIndex = 20 - index;
                }, 500);
            }
            else{
                pageTurn.classList.add('turn')
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500);
            }
        }});

    
    
   
    const frontPageNextButtons = document.querySelectorAll('.page-front .nextprev-btn.front');
  
    frontPageNextButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Find the closest .book-page container of the clicked button
            const currentPage = btn.closest('.book-page');
            console.log(currentPage);
            // Find the .page-back element within the current page
            const backPage = currentPage.querySelector('.page-back');
    
            // Adjust the z-index of the back page
            if (backPage) {
                backPage.style.zIndex = '1';
            }
        });
    });
    // backPageButtons.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         const currentPage = btn.closest('.book-page');
    //         const nextPageId = btn.dataset.page;
    //         const nextPage = document.getElementById(nextPageId);

    //         // Check if the current page is page-front or page-back
    //         const currentPageIsFront = currentPage.classList.contains('page-front');

    //         // If current page is page-front, set higher z-index for page-back
    //         if (currentPageIsFront) {
    //             nextPage.style.zIndex = '2';
    //         } else {
    //             nextPage.style.zIndex = '1';
    //         }
    //     });
    // });
    const backPageNextButtons = document.querySelectorAll('.page-back .nextprev-btn.front');
    backPageNextButtons.forEach((el, index) => {
        el.onclick =  () => {
            const currentPage = el.closest('.book-page');
            const nextPage = currentPage.nextElementSibling;
           
            if(nextPage.classList.contains('turn')){
                nextPage.classList.remove('turn');
                setTimeout(() => {
                   nextPage.style.zIndex = 20 - index;
                }, 500);
            }
            else{
                nextPage.classList.add('turn')
                setTimeout(() => {
                    nextPage.style.zIndex = 20 + index;
                }, 500);
            }
        }});
        const backPageBackButtons = document.querySelectorAll('.page-back .nextprev-btn.back');
        backPageBackButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentPage = btn.closest('.book-page');
                console.log(currentPage);
                const backPage = currentPage.querySelector('.page-back');
                if (backPage) {
                    backPage.style.zIndex = '0';
                }
            });
        });
        const frontPagePrevButtons = document.querySelectorAll('.page-front .nextprev-btn.back');
        frontPagePrevButtons.forEach((el, index) => {
            el.onclick =  () => {
                const currentPage = el.closest('.book-page');
                if(currentPage.classList.contains('turn')){
                    currentPage.classList.remove('turn');
                    setTimeout(() => {
                        console.log(index);
                       currentPage.style.zIndex = 19 - index;
                    }, 500);
                }
               
            }});
}
//     const pageTurnBtn = document.querySelectorAll('.nextprev-btn.front');
// pageTurnBtn.forEach((el, index) => {
//     el.onclick =  () => {
//         const pageTurnId = el.getAttribute('data-page');
//         const pageTurn = document.getElementById(pageTurnId);

//         if(pageTurn.classList.contains('turn')){
//             pageTurn.classList.remove('turn');
//             setTimeout(() => {
//                pageTurn.style.zIndex = 21 - index;
//             }, 500);
//         }
//         else{
//             pageTurn.classList.add('turn')
//             setTimeout(() => {
//                 pageTurn.style.zIndex = 21 + index;
//             }, 500);
//         }
//     }
// })


