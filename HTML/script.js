document.addEventListener('DOMContentLoaded', () => { 
    const faqQuestions = document.querySelectorAll('.faq-question'); 

    faqQuestions.forEach(question => { 
        question.addEventListener('click', () => { 
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') { 
                answer.style.display = 'none'; 
            } else { 
                document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none'); 
                answer.style.display = 'block'; 
            } 
        }); 
    }); 
});