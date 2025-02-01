package com.example.insurance.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;


@Entity

@Table(name = "policy")

public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer PolicyID;

    @Column(nullable = false)
    private String P_name;

    @Column(nullable = false)
    private String Premium;

    @Column(nullable = false)
    private String Terms;

    @ManyToOne
    @JoinColumn(name = "I_ID", nullable = false)
    @JsonBackReference
    private Insurer insurer;

	public Integer getPolicyID() {
		return PolicyID;
	}

	public void setPolicyID(Integer policyID) {
		PolicyID = policyID;
	}

	public String getP_name() {
		return P_name;
	}

	public void setP_name(String p_name) {
		P_name = p_name;
	}

	public String getPremium() {
		return Premium;
	}

	public void setPremium(String premium) {
		Premium = premium;
	}

	public String getTerms() {
		return Terms;
	}

	public void setTerms(String terms) {
		Terms = terms;
	}

	public Insurer getInsurer() {
		return insurer;
	}

	public void setInsurer(Insurer insurer) {
		this.insurer = insurer;
	}

	
}
