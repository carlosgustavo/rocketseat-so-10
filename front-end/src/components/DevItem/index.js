import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";
import giticon from "../../assets/git-icon.svg";
import githublogo from "../../assets/github-logo.svg";
import "../../global.css";

function DevItem() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
      console.log(response.data);
    }

    loadDevs();
  }, []);

  return (
    <div id="app">
      <Link to="/">
        <img className="img-github" src={githublogo} alt="logo github" />
      </Link>

      <main>
        <ul>
          {devs.map((dev) => (
            <li key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                  <strong>{dev.name}</strong>

                  <span>{dev.techs.join(", ")}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <div className="git-cont">
                <img src={giticon} alt="icon github" />
                <p>{dev.github_username}</p>
              </div>
              <button className="button-git">
                <span className="span-git">
                  <a href={`https://github.com/${dev.github_username}`}>
                    Acessar Github
                  </a>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default DevItem;
