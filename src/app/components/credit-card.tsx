export default function CreditCard(props) {
  return (
    <div className="flex">
      <img src={props.image} className="h-20 rounded-full mr-8" />
      <div>
        <h3 className="text-lg font-bold">
          {props.name}
          <span
            className={`${
              props.role == "Test Pilot" ? "text-slate-700" : "text-amber-500"
            } ml-2 font-mono font-normal text-sm`}
          >
            {props.role}
          </span>
        </h3>
        <h4 className="font-medium text-gray-500">{props.title}</h4>
        <p className="text-sm text-gray-400">{props.secondaryRole}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
          magni asperiores omnis perspiciatis ea fuga, totam rem eius, molestias
          tenetur delectus reprehenderit sit fugit numquam? Impedit excepturi at
          atque!
        </p>
      </div>
    </div>
  );
}
