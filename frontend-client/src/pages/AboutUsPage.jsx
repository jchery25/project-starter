

function AboutUsPage() {
  const names = [
    "Adeleye Adesina",
    "Aziz Abdusamiev",
    "Carlo Ace Sagad",
    "Chaim Mallakh",
    "Harpreet Singh",
    "Imanol Espinal",
    "Jack Hachicho",
    "Jascharan Singh",
    "Jemes Perera",
    "Rei Zheng",
    "Joel Diaz Vidal",
    "Kevin Chen",
    "Kevin Zheng",
    "Kjara Pepushaj",
    "Leyanna Daniels",
    "Matthew Finamore",
    "Matthew Arenas",
    "Michael Alvarez",
    "Sania Pervez",
    "Simona Isakova",
    "Steven Henry",
    "Subhan Tariq",
    "Tor Sdayur",
    "Zainib Mohammad",
  ];

  return (
    <>
      <div className="col text-center">
        <h2 className="mb-3">
          The CTP Microblog is a short piece of content that's shared online for
          quick audience interaction
        </h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          quidem adipisci nobis quia eum quaerat quos ducimus, deleniti
          exercitationem animi itaque iste illo reiciendis vitae atque
          necessitatibus voluptatum repellendus quisquam?
        </p>
        <h2 className="mb-3">About our Team</h2>
        <div className="row">
          <>
            {names.map((name, index) => (
              <div className="col-lg-4" key={index}>
                <h3>{name}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quidem adipisci nobis quia eum quaerat quos ducimus,
                  deleniti exercitationem animi itaque iste illo reiciendis
                  vitae atque necessitatibus voluptatum repellendus quisquam?
                </p>{" "}
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;