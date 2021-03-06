export default function Testimonial() {
  return (
    <div className="flex items-start mt-8">
      <img className="rounded-full flex-shrink-0 mr-4" src="../images/features-avatar.jpg" width="40" height="40" alt="Features avatar" />
      <div>
        <blockquote className="text-gray-500 italic mb-3">"We believe this technology stack allows teams to work efficient and highly collaborative".</blockquote>
        <div className="text-gray-700 font-medium">
          <cite className="text-gray-500 not-italic">Anastasia Dan</cite> -{" "}
          <a className="text-zomp-600 hover:text-plato-900 transition duration-150 ease-in-out" href="#0">
            UX Board
          </a>
        </div>
      </div>
    </div>
  );
}
