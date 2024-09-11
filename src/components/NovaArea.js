import React, { useState } from 'react';
import { mockUnidades } from '../mock-data/unidades';
import { mockServicos } from '../mock-data/servicos';
import '../styles/NovaArea.css'; 
import { useNavigate } from 'react-router-dom';

const NovaArea = () => {
  const navigate = useNavigate();

  const [status, setStatus] = useState(true);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [unidades, setUnidades] = useState([]);
  const [servicos, setServicos] = useState([]);

  const toggleSelection = (e, type) => {
    const value = e.target.value;

    if (type === 'unidade') {
      setUnidades(prevUnidades => {
        if (prevUnidades.includes(value)) {
          return prevUnidades.filter(u => u !== value);
        } else {
          return [...prevUnidades, value];
        }
      });
    } else if (type === 'servico') {
      setServicos(prevServicos => {
        if (prevServicos.includes(value)) {
          return prevServicos.filter(s => s !== value);
        } else {
          return [...prevServicos, value];
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArea = {
      nome,
      descricao,
      unidades,
      servicos,
      status: status ? 'Ativo' : 'Inativo',
    };

    // Get existing areas from localStorage or initialize an empty array
    const existingAreas = JSON.parse(localStorage.getItem('areas')) || [];

    // Add the new area to the array
    existingAreas.push(newArea);

    // Save the updated array back to localStorage
    localStorage.setItem('areas', JSON.stringify(existingAreas));

    // Optionally, navigate back or show a success message
    navigate('/');
  };

  const isFormValid = () => {
    return nome.trim() !== '' &&
           unidades.length > 0 &&
           servicos.length > 0;
  };

  return (
    <div className="page-container">
      <div className="cadastros-container">
        <div className='title-container'><h3>Nova Área</h3></div>

        <div className='page-content-container'>
          <form onSubmit={handleSubmit} className="nova-area-form">
            <div className="nova-area-container">

              <div className="form-group">
                <div className="input-status">
                  <div className='input-container'>
                    <label>Nome*</label>
                    <input 
                      placeholder='Digite o nome da área'
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>
                  <div className="switch-container">
                    <span className='switch-title'>Status</span>
                    <div className='switch-wrapper'>
                      <div className="switch">
                        <input
                          type="checkbox"
                          id="status-switch"
                          checked={status}
                          onChange={() => setStatus(!status)}
                        />
                        <label htmlFor="status-switch" className="slider"></label>
                      </div>
                      <span className="status-label">{status ? 'Ativo' : 'Inativo'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Descrição</label>
                <textarea 
                  placeholder='Adicione uma descrição para a área'
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Unidades*</label>
                <div className="select-container">
                  <div className="selected-items">
                    {unidades.map((unidade, index) => (
                      <div key={index} className="selected-item">
                        {unidade}
                        <span
                          className="remove-item"
                          onClick={() => setUnidades(unidades.filter(u => u !== unidade))}
                        >
                          &times;
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="select-wrapper">
                    <select
                      multiple
                      value={unidades}
                      onChange={(e) => toggleSelection(e, 'unidade')}
                    >
                      {mockUnidades.map((unidade, index) => (
                        <option key={index} value={unidade}>
                          {unidade}
                        </option>
                      ))}
                    </select>
                    <div className="select-label">
                      {unidades.length === 0 ? 'Selecione as unidades' : `Unidades selecionadas: ${unidades.join(', ')}`}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Serviços*</label>
                <div className="select-container">
                  <div className="selected-items">
                    {servicos.map((servico, index) => (
                      <div key={index} className="selected-item">
                        {servico}
                        <span
                          className="remove-item"
                          onClick={() => setServicos(servicos.filter(s => s !== servico))}
                        >
                          &times;
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="select-wrapper">
                    <select
                      multiple
                      value={servicos}
                      onChange={(e) => toggleSelection(e, 'servico')}
                    >
                      {mockServicos.map((servico, index) => (
                        <option key={index} value={servico}>
                          {servico}
                        </option>
                      ))}
                    </select>
                    <div className="select-label">
                      {servicos.length === 0 ? 'Selecione os serviços' : `Serviços selecionados: ${servicos.join(', ')}`}
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="form-buttons">
              <button type="button" onClick={() => navigate('/')} className="cancel-button">Cancelar</button>
              <button
                type="submit"
                className={`save-button ${!isFormValid() ? 'disabled-button' : ''}`}
                disabled={!isFormValid()}
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NovaArea;
