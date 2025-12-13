export interface Testimonial {
    name: string;
    role: string;
    text: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        name: "Mary Cordoba",
        role: "Colleague",
        text: "Pleasant and approachable, shows strong leadership in proposing solutions and explaining how they work. Always takes the time to ensure the team understands the reasoning behind decisions, making projects flow more smoothly and efficiently. Her input often guides the team toward better outcomes.",
        rating: 4,
    },
    {
        name: "Santiago Torres",
        role: "Teammate",
        text: "Works efficiently and quickly, able to adapt to changing requirements without losing focus. Communicates clearly and effectively, helping the team stay aligned. Reliable under pressure and consistently finds practical solutions to challenges, making him a strong contributor to any project.",
        rating: 5,
    },
    {
        name: "José Hebert Aponza Peña",
        role: "Colleague",
        text: "Overall, working with him has been a very positive experience. Always maintains good communication, completes responsibilities on time, and supports the team whenever necessary. Skilled at analyzing problems and finding fast, effective solutions, which strengthens the team's performance overall.",
        rating: 4,
    },
    {
        name: "Soluciones Rengifo SAS",
        role: "Company",
        text: "A highly competent programmer with an impressive ability to quickly adapt to complex and changing environments. Excels in strongly-typed languages and demonstrates a remarkable skill for understanding and efficiently solving technical problems. Overall, a responsible, proactive, and high-quality professional developer.",
        rating: 5,
    },
    {
        name: "Kevin Caicedo",
        role: "Colleague",
        text: "Very proactive, perseverant, and has a deep understanding of concepts. He comprehends the 'why' behind things and constantly seeks professional growth.",
        rating: 5,
    },
];