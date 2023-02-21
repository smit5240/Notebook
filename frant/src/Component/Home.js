import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-img">
        <div className="p-box">
          <h1 className="text-white"> Wellcome To Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            aliquid nulla optio nam earum eius nisi pariatur debitis,
            perferendis autem nihil impedit nostrum tempore aliquam laborum
            sapiente ad reiciendis officiis?
          </p>
          <a href="/sign_up" className="gc">
            {" "}
            Go To
          </a>
        </div>
      </div>
    </div>
  );
}
