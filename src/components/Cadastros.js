import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { mockServicos } from '../mock-data/servicos';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastros.css';

const ITEMS_PER_PAGE = 5;

const Cadastros = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArea, setSelectedArea] = useState('Área Judicial');
  const [areas, setAreas] = useState([]);
  const totalPages = Math.ceil(areas.length / ITEMS_PER_PAGE);

  useEffect(() => {
    // Load areas from localStorage
    const storedAreas = JSON.parse(localStorage.getItem('areas')) || [];
    setAreas(storedAreas);
  }, []);

  const handleNewButtonClick = () => {
    navigate('/nova-area');
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleServiceAreaChange = (area) => {
    setSelectedArea(area);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = areas.slice(startIndex, endIndex);

  return (
    <div className="page-container">
      <div className="cadastros-container">
        <div className='title-container'><h3>Cadastros</h3></div>

        <div className='page-content-container'>
          <div className="sidebar">
            <div className="search-bar-container">
              <div className="search-input-wrapper">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" style={{ width: '80%' }} placeholder="Busque" className="search-input" />
              </div>
              <button className="filter-button">
                <FontAwesomeIcon icon={faFilter} />
              </button>
            </div>
            <ul className="service-areas">
              {mockServicos.map((area, index) => (
                <li 
                  key={index} 
                  className={selectedArea === area ? 'active' : ''}
                  onClick={() => handleServiceAreaChange(area)}
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div className="main-content">
            <div className="header">
              <h2>{selectedArea}</h2>
            </div>
            <div className="search-bar-container-judicial">
              <div className="search-input-wrapper">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" placeholder="Pesquise por nome" className="search-input" />
              </div>
              <div className='plus-button-container'>
                <button className="new-button" onClick={handleNewButtonClick}>
                  <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  Nova
                </button>
              </div>
            </div>
            <table className="table">
              <thead className='table-container'>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Unidades</th>
                  <th>Serviços</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((area, index) => (
                  <tr key={index}>
                    <td>{area.nome}</td>
                    <td>{area.descricao}</td>
                    <td>{area.unidades.join(', ')}</td>
                    <td>{area.servicos.join(', ')}</td>
                    <td className="status">
                      <span className={`status-dot ${typeof area.status === 'string' ? area.status.toLowerCase() : ''}`}></span> 
                      {typeof area.status === 'string' ? area.status : 'Desconhecido'}
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faEllipsisVertical} className='menu-icon' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <span className='showing'>Exibindo: {startIndex + 1} de {areas.length} resultados</span>
              <div className="pagination-controls">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  &lt;
                </button>
                <span className='current-page'>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  &gt;
                </button>
              </div>
              <div className="items-per-page">
                <span>Tipos por página:</span>
                <select
                  value={ITEMS_PER_PAGE}
                  onChange={(e) => {

                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastros;
