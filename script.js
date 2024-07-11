// const button = document.getElementsByClassName("switch");
// switch.addEventListner("click",()=>{
//     document.body.classList.toggle("light-mode");
// })



// Sending Data to Best Seller Section 
const BestSellerBooksdata = [
    {
        bookImage: "books/bhagavad-gita.jpg",
        bookTitle: "Bhagwat Gita",
        bookInfo: "Discover the timeless wisdom and profound teachings of the Bhagavad Gita, a spiritual masterpiece that offers guidance for navigating life's challenges and attaining inner harmony. Immerse yourself in its transformative verses, and embark on a journey of self-discovery and enlightenment that will resonate with your soul.",
        bookPrice: "259₹"
    },
    {
        bookImage: "books/arthShastra.jpg",
        bookTitle: "Artha Shastra",
        bookInfo: "Artha Shastra, an ancient treatise on statecraft and economics written by Chanakya, delves into the intricate workings of governance, diplomacy, and wealth management. This influential work offers invaluable insights on leadership, strategy, and the art of governance, making it a must-read for those interested in the dynamics of power and prosperity.",
        bookPrice: "259₹"
    },
    {
        bookImage: "books/richDadPoorDad.jpg",
        bookTitle: "Rich Dad Poor Dad",
        bookInfo: "\"Rich Dad Poor Dad\" is a bestselling personal finance book that challenges conventional beliefs about money. With engaging storytelling, it highlights the contrasting financial mindsets of two fathers and provides valuable insights into financial education, investing, and creating wealth for a brighter future.",
        bookPrice: "259₹"
    },
    {
        bookImage: "books/great-indian-novel-shashi-tharoor-viking-press.webp",
        bookTitle: "The Great Indian Novel",
        bookInfo: "\"The Great Indian Novel\" by Shashi Tharoor is a unique blend of mythology, history, and political satire, offering a captivating narrative that explores the intricacies of India's past and present through a clever reinterpretation of the Mahabharata.",
        bookPrice: "259₹"
    },
    {
        bookImage: "books/RAMAYANA.webp",
        bookTitle: "Ramayana",
        bookInfo: "The Ramayana is an ancient Hindu epic that narrates the divine story of Lord Rama's journey, showcasing his virtues, trials, and ultimate victory of good over evil. It serves as a timeless source of wisdom, moral values, and spiritual teachings that continue to inspire millions around the world.",
        bookPrice: "259₹"
    },
    {
        bookImage: "books/placeofIllusion.webp",
        bookTitle: "The Palace of Illusions",
        bookInfo: "\"Palace of Illusions\" by Chitra Banerjee Divakaruni is a captivating retelling of the Mahabharata from the perspective of Draupadi, offering a mesmerizing exploration of love, power, and the complexities of human nature in a world of divine intrigue and mythical grandeur.",
        bookPrice: "259₹"
    }
];
const BestSellerBookCardsSection = document.querySelector('.book-cards');
BestSellerBookCardsSection.innerHTML = "";
BestSellerBooksdata.forEach((BestSellerBook,index)=>{
    BestSellerBookCardsSection.innerHTML += `<div class="book-card">
                <img src="${BestSellerBook.bookImage}" alt="">
                <h4 class="book-title">${BestSellerBook.bookTitle}</h4>
                <p class="book-info">${BestSellerBook.bookInfo}</p>
                <h6 class="book-price">${BestSellerBook.bookPrice}</h6>
                <button class="add-button">PURCHASE</button>
            </div>`;
}); 




// Sending Data to Recommended Book Section below Search Bar
const RecommendedBooksdata = [
    {
        bookImage: "books/HarryPoter.jpg",
        bookTitle: "Harry Poter",
        bookInfo: "The Harry Potter books by J.K. Rowling weave a spellbinding tale of wizardry, friendship, and the triumph of good over evil. With their enchanting world and unforgettable characters, these books have captivated readers of all ages and continue to inspire the magic of imagination.",
        bookPrice: "290",
        bookType: "Fiction"
    },
    {
        bookImage: "books/VeerSavarkar.jpg",
        bookTitle: "Veer Savarkar",
        bookInfo: "Veer Savarkar, also known as Vinayak Damodar Savarkar, was a prominent freedom fighter, writer, and philosopher of India. His nationalist ideologies and advocacy for Hindutva played a significant role in India's struggle for independence.",
        bookPrice: "210",
        bookType: "Non Fiction"
    },
    {
        bookImage: "books/sardarPatel.jpg",
        bookTitle: "Sardar Patel",
        bookInfo: "Sardar Vallabhbhai Patel also known as Iron-Man of India was a key leader in India's freedom movement and played a vital role in the integration of princely states, contributing significantly to the unity of modern India.",
        bookPrice: "346",
        bookType: "Non Fiction"
    },
    {
        bookImage: "books/rigved.jpg",
        bookTitle: "Rig Veda",
        bookInfo: "The Rigveda is an ancient collection of hymns and prayers, composed in Vedic Sanskrit around 1500-1200 BCE. It is the oldest scripture of Hinduism and provides valuable insights into the religious, social, and cultural aspects of ancient Indian civilization.",
        bookPrice: "290",
        bookType: "Non Fiction"
    },
    {
        bookImage: "books/thearyanInvansion.jpg",
        bookTitle: "The Aryan Invansion",
        bookInfo: "The Aryan invasion theory proposes that an Indo-European group called the Aryans migrated into the Indian subcontinent around 1500 BCE, bringing with them their language, culture, and religious practices. This theory has been a subject of debate among scholars, with some supporting the idea of a significant Aryan migration, while others challenge its historical validity. The discourse surrounding the Aryan invasion theory continues to evolve, shaping our understanding of ancient Indian history and the cultural roots of the subcontinent.",
        bookPrice: "290",
        bookType: "Non Fiction"
    },
    {
        bookImage: "books/subhash-chandra-bose-inspiration-template-design-50567377675dcbef642a1059190a1904_screen.jpg",
        bookTitle: "Subash Chandra Bose",
        bookInfo: "Netaji Subhas Chandra Bose, popularly known as Netaji, was a charismatic leader and freedom fighter during India's struggle for independence. He advocated for complete independence from British rule and played a crucial role in organizing the Indian National Army (INA) to fight against colonial powers. Netaji's unwavering patriotism, courage, and determination have made him an iconic figure in Indian history, inspiring generations with his commitment to the cause of liberation.",
        bookPrice: "270",
        bookType: "Non Fiction"
    },
    {
        bookImage: "books/habits.jpg",
        bookTitle: "Million Dollar Habits",
        bookInfo: "Million Dollar Habits is a powerful self-help book that offers practical strategies and insights for achieving success and wealth. Written by renowned author Brian Tracy, it provides guidance on developing positive habits, enhancing productivity, and cultivating a mindset of abundance, empowering readers to transform their lives and unlock their full potential. Through its actionable advice and motivational approach, Million Dollar Habits serves as a valuable resource for anyone seeking to create a prosperous and fulfilling life.",
        bookPrice: "543",
        bookType: "Fiction"
    },
    {
        bookImage: "books/Dr.B.R_Ambedkar.jpg",
        bookTitle: "Annihilation of Caste",
        bookInfo: "\"Annihilation of Caste\" is a groundbreaking work by Dr. B.R. Ambedkar, a social reformer and the architect of India's constitution. In this thought-provoking book, Ambedkar challenges the oppressive caste system that has plagued Indian society for centuries. With sharp analysis and compelling arguments, he calls for the complete eradication of caste-based discrimination and inequality, urging society to embrace principles of social justice and equality for all. \"Annihilation of Caste\" continues to be a powerful critique of social injustice and a significant inspiration for the struggle against caste-based discrimination.",
        bookPrice: "265",
        bookType: "Non Fiction"
    },
    {
        bookImage: "books/white-tiger-arvind-adiga-harpercollins.webp",
        bookTitle: "The White Tiger",
        bookInfo: "\"The White Tiger\" by Aravind Adiga is a compelling and darkly humorous tale that provides a unique glimpse into the underbelly of modern India. Through the voice of its ambitious protagonist, Balram Halwai, the novel explores themes of poverty, corruption, and the pursuit of freedom. With its sharp social commentary and powerful storytelling, \"The White Tiger\" is a thought-provoking read that challenges societal norms and leaves a lasting impact.",
        bookPrice: "190",
        bookType: "Fiction"
    },
    {
        bookImage: "books/38747859-removebg-preview (1).png",
        bookTitle: "Famous Last Lines",
        bookInfo: "Within the pages of \"Famous Last Line,\" a symphony of words orchestrates a gripping narrative that captivates from start to finish. The characters breathe with authenticity, their journeys intertwining in a web of passion, betrayal, and redemption. As the final line approaches, anticipation builds, and the culmination of the story leaves an emotional resonance that echoes long after the book is closed.",
        bookPrice: "890",
        bookType: "Fiction"
    },
    {
        bookImage: "books/swamiVivekanand.jpg",
        bookTitle: "Swami Vivekanand",
        bookInfo: "\"The Complete Works of Swami Vivekananda\" is a comprehensive collection of the profound teachings and insightful speeches of the great Indian philosopher and spiritual leader, Swami Vivekananda. It encompasses a wide range of topics including spirituality, philosophy, Vedanta, and practical wisdom, offering readers a transformative and enlightening reading experience. This timeless masterpiece serves as a guiding light, inspiring individuals to explore the depths of their spirituality and lead a purposeful life.",
        bookPrice: "265",
        bookType: "Non Fiction"
    },
    {
        bookImage: "books/ChetanBhagat.jpg",
        bookTitle: "One Indian Girl",
        bookInfo: "\"One Indian Girl\" by Chetan Bhagat is a captivating tale that delves into the complexities of modern relationships and societal expectations. Through the perspective of a fiercely independent and ambitious woman, it challenges traditional norms and provokes thought about gender dynamics in contemporary India. A thought-provoking read that sparks conversations about feminism, love, and self-discovery.",
        bookPrice: "753",
        bookType: "Fiction"
    }
];
const bookRecommendationCards = document.querySelector(".book-Recommendation-cards");
bookRecommendationCards.innerHTML = "";
RecommendedBooksdata.forEach((RecommenedBook,index)=>{
    bookRecommendationCards.innerHTML += `<div class="Recommendation-Card">
                <img src="${RecommenedBook.bookImage}" alt="" height="300px">
                <div class="Fiction-Or-non-fiction">
                    <h4 class="BookTitle">${RecommenedBook.bookTitle}</h4>
                    <p style="color: rgba(255, 255, 0, 0.539); font-size: small; font-weight: 200;position: relative; top: 8px; right: 5px;">${RecommenedBook.bookType}</p>
                </div>
                <p class="BookInfo">${RecommenedBook.bookInfo}</p>
                <h5 class="Price" style="color: white; text-align: left; padding-left: 5px; padding-top: 3px;">${RecommenedBook.bookPrice+"₹"}</h5>
                <button class="PURCHASEButton-in-Recommendation-section">PURCHASE</button>
            </div>`;
});

// Search Bar in Recommendation Section
const searchBar = document.querySelector('.search-bar #SearchHolder');
searchBar.addEventListener('input',(e)=>{
    e.preventDefault();
    // Debouncing Matlab user ke 1sec baad search hoga
    setTimeout(()=>{
        console.log(e.target.value);
        const serachBook = e.target.value.toLowerCase();
        const filteredBookData =  RecommendedBooksdata.filter(function(book){
            return book.bookTitle.toLowerCase().includes(serachBook);
        });
        bookRecommendationCards.innerHTML = ""
        if(filteredBookData === null){
            bookRecommendationCards.innerHTML += "No Books Available with this Name"
        }
        else{
            filteredBookData.forEach((f)=>{
                bookRecommendationCards.innerHTML += `<div class="Recommendation-Card">
                    <img src="${f.bookImage}" alt="" height="300px">
                    <div class="Fiction-Or-non-fiction">
                        <h4 class="BookTitle">${f.bookTitle}</h4>
                        <p style="color: rgba(255, 255, 0, 0.539); font-size: small; font-weight: 200;position: relative; top: 8px; right: 5px;">${f.bookType}</p>
                    </div>
                    <p class="BookInfo">${f.bookInfo}</p>
                    <h5 class="Price" style="color: white; text-align: left; padding-left: 5px; padding-top: 3px;">${f.bookPrice+"₹"}</h5>
                    <button class="PURCHASEButton-in-Recommendation-section">PURCHASE</button>
                </div>`;
            });
        }
    },1000);
    
})


  
// Sending Data to Reviewers Section 
const  reviewers = [
    {
      reviewerName: "Sourav",
      review: "संग्रह पुस्तकालय's website is a bibliophile's paradise! The beautiful layout, coupled with the vast collection of books, makes it a delight to explore. From the latest bestsellers to rare gems, they have it all. Highly recommended for all book lovers!",
      imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png",
      gender : true,
    },
    {
      reviewerName: "Sahil ",
      review: "The संग्रह पुस्तकालय website offers a seamless online shopping experience. The categorization of books, easy-to-use search, and quick checkout process ensure that I find and purchase my favorite books effortlessly. A must-visit for all book enthusiasts!",
      imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
      ,gender : true,
    },
    {
      reviewerName: "Ishita",
      review: "संग्रह पुस्तकालय's website stands out for its exceptional customer service and prompt delivery. The team's attention to detail and genuine love for books is evident in every aspect of their online store.",
      imageUrl: "https://cdn-icons-png.flaticon.com/256/6997/6997662.png"
      ,gender : false,
    },
    {
      reviewerName: "Ishan",
      review: "The संग्रह पुस्तकालय website offers a seamless online shopping experience. The categorization of books, easy-to-use search, and quick checkout process ensure that I find and purchase my favorite books effortlessly. A must-visit for all book enthusiasts!",
      imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
        ,gender : true,
    },
    {
        reviewerName: "Devang",
        review: "The संग्रह पुस्तकालय website offers a seamless online shopping experience. The categorization of books, easy-to-use search, and quick checkout process ensure that I find and purchase my favorite books effortlessly. A must-visit for all book enthusiasts!",
        imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
          ,gender : true,
    },
    {
        reviewerName: "Devang",
        review: "The संग्रह पुस्तकालय website offers a seamless online shopping experience. The categorization of books, easy-to-use search, and quick checkout process ensure that I find and purchase my favorite books effortlessly. A must-visit for all book enthusiasts!",
        imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
          ,gender : true,
    },
    {
        reviewerName: "Devang",
        review: "The संग्रह पुस्तकालय website offers a seamless online shopping experience. The categorization of books, easy-to-use search, and quick checkout process ensure that I find and purchase my favorite books effortlessly. A must-visit for all book enthusiasts!",
        imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
          ,gender : true,
    },
    {
        reviewerName: "Devang",
        review: "The संग्रह पुस्तकालय website offers a seamless online shopping experience. The categorization of books, easy-to-use search, and quick checkout process ensure that I find and purchase my favorite books effortlessly. A must-visit for all book enthusiasts!",
        imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
          ,gender : true,
    },
    {
        reviewerName: "Devang",
        review: "The संग्रह पुस्तकालय website offers a seamless online shopping experience. The categorization of books, easy-to-use search, and quick checkout process ensure that I find and purchase my favorite books effortlessly. A must-visit for all book enthusiasts!",
        imageUrl: "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
          ,gender : true,
    }
  ];
const reviewersCardsSection = document.querySelector(".reviewers-Cards")
reviewersCardsSection.innerHTML = ""
reviewers.forEach((reviewer,index)=>{
    reviewersCardsSection.innerHTML += `<div class="review-Card">
                <img class="Review-Section-Image"
                    src="${reviewer.imageUrl}"
                    alt="">
                <div><h4 class="reviewer-Name">${reviewer.reviewerName}</h4>
                <p class="review">${reviewer.review}</p></div>
            </div>`
});



