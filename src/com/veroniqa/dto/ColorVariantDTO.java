package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Set;
/**
 * 
 * @author SHI
 * This class represents an instance of a colour variant of a product
 */
public class ColorVariantDTO implements Serializable {

	private static final long serialVersionUID = -3743307745357383308L;

	private Long colorId;
	private String colorName;
	private Set<SizeVariantDTO> sizeVariants;
	
	public Long getColorId() {
		return colorId;
	}
	public void setColorId(Long colorId) {
		this.colorId = colorId;
	}
	public String getColorName() {
		return colorName;
	}
	public void setColorName(String colorName) {
		this.colorName = colorName;
	}
	public Set<SizeVariantDTO> getSizeVariants() {
		return sizeVariants;
	}
	public void setSizeVariants(Set<SizeVariantDTO> sizeVariants) {
		this.sizeVariants = sizeVariants;
	}
	@Override
	public boolean equals(Object obj) {
		ColorVariantDTO color=(ColorVariantDTO)obj;
		if(color==null || color.colorId==null || this.colorId==null)
			return false;
		return color.colorId.longValue()==this.colorId.longValue();
	}
	
	
}
