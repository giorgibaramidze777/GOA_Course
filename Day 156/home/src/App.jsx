import { useParams } from "react-router-dom";

const courses = [
    { id: "c1", slug: "react-basics", title: "React-ის საფუძვლები", duration: "6 კვირა", price: 300, isPopular: true },
    { id: "c2", slug: "javascript-pro", title: "Advanced JavaScript", duration: "8 კვირა", price: 450, isPopular: false },
    { id: "c3", slug: "node-express", title: "Node.js & Express", duration: "5 კვირა", price: 350, isPopular: true }
];

const App = () => {
    // 1. წამოიღეთ course_slug პარამეტრი useParams-იდან
    // 2. იპოვეთ კურსი courses მასივში slug-ის მიხედვით
    // 3. თუ კურსი ვერ მოიძებნა, გამოიტანეთ ტექსტი: "კურსი ვერ მოიძებნა"
    // 4. თუ მოიძებნა, გამოიტანეთ: title, duration, price და თუ isPopular არის true, გვერდით მიუწერეთ "🔥 პოპულარული"

    const { course_slug, slug } = useParams();
    const currentSlug = course_slug ?? slug;
    const course = courses.find(c => c.slug === currentSlug);

    return (
        <div>
            {course ? (
                <div>
                    <h1>{course.title} {course.isPopular && "🔥 popular"}</h1>
                    <p>price: {course.duration}</p>
                    <p>price: {course.price}₾</p>
                </div>
            ) : (
                <p>კურსი ვერ მოიძებნა</p>
            )}
        </div>
    );
};

export default App;